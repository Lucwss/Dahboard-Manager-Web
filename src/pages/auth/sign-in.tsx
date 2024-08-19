import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from "react-router-dom";
import { signIn } from '@/api/sign-in'
import { useMutation } from '@tanstack/react-query'


const signInForm = z.object({
  email: z.string().email()
})


type SignInForm = z.infer<typeof signInForm>


export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success("We've sent an authentication link to your email account", {
        action: {
          label: 'Re-send',
          onClick: () => {
            handleSignIn(data)
          }
        }
      })
    } catch (error) {
      toast.error("Invalid Credentials")
    }
  }

  return <>
    <Helmet title="Login" />
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-up">New establishment</Link>
      </Button>

      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Access Panel
          </h1>
          <p className="text-sm text-muted-foreground">
            Keep track of your sells through the partner panel
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Enter
          </Button>
        </form>
      </div>
    </div>
  </>
}