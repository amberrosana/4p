import React from 'react'

function Register() {
    return (
        <div>
            <div class="flex min-h-screen bg-gray-900 items-center justify-center">
  <div class="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
    {/* <!-- Header Section --> */}
    <div class="text-center mb-6">
      <h2 class="text-3xl font-extrabold text-white">Create an Account</h2>
      <p class="mt-2 text-sm text-gray-300">Join us and start your journey!</p>
    </div>

    {/* <!-- Register Form --> */}
    <form class="space-y-6" action="#" method="POST">
      {/* <!-- Name Input --> */}
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* <!-- Email Input --> */}
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* <!-- Password Input --> */}
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* <!-- Confirm Password Input --> */}
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-300">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* <!-- Submit Button --> */}
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Account
        </button>
      </div>
    </form>

    {/* <!-- Sign-in Link --> */}
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-300">Already have an account?</p>
      <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
    </div>
  </div>
</div>
            </div>
    )
      
{/* <script>
  // Password Match Validation
  document.querySelector('form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match. Please make sure both password fields are identical.");
    }
  });
</script> */}

}

export default Register