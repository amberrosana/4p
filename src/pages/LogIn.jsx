import React from 'react'

function LogIn() {
  return (
    <div class="flex min-h-screen bg-gray-900 items-center justify-center">
  <div class="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
    {/* <!-- Header Section --> */}
    <div class="text-center mb-6">
      <h2 class="text-3xl font-extrabold text-white">Join Us</h2>
      <p class="mt-2 text-sm text-gray-300">Sign in to start playing!</p>
    </div>

    {/* <!-- Sign-in Form --> */}
    <form class="space-y-6" action="#" method="POST">
      {/* <!-- Email Input --> */}
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300">Email address</label>
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

      {/* <!-- Forgot Password Link --> */}
      <div class="flex items-center justify-between">
        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      {/* <!-- Submit Button --> */}
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>

    {/* <!-- Alternative Sign-in Methods --> */}
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-300">Or sign in with</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="inline-block">
          {/* <!-- Add your Google icon here --> */}
          <img src="https://user-images.githubusercontent.com/113966935/226410756-2a631a49-654b-4036-a880-e9e4656e4c51.png" alt="Google" class="h-8 w-8"/>
        </a>
        <a href="#" class="inline-block">
          {/* <!-- Add your Twitter icon here --> */}
          <img src="https://user-images.githubusercontent.com/113966935/226410756-2a631a49-654b-4036-a880-e9e4656e4c51.png" alt="Twitter" class="h-8 w-8"/>
        </a>
      </div>
    </div>

    {/* <!-- Divider --> */}
    <div class="my-6 border-t border-gray-600"></div>

    {/* <!-- Sign-up Section (Optional) --> */}
    <div class="text-center">
      <p class="text-sm text-gray-300">Don't have an account?</p>
      <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">Create one</a>
    </div>
  </div>
</div>

  )
}

export default LogIn