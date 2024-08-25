from allauth.socialaccount.forms import SignupForm
class WayfSignupForm(SignupForm):

    def __init__(self, *args, **kwargs):
        super(WayfSignupForm, self).__init__(*args, **kwargs)
        print("WAYF:")
        #print(self.socialaccount)
        print(self.sociallogin)

    def save(self, request):

        # Ensure you call the parent class's save.
        # .save() returns a User object.
        user = super(WayfSignupForm, self).save(request)

        # Add your own processing here.
        print(self.socialaccount)

        # You must return the original result.
        return user
