@extends('layouts.app')

@section('content')
<div class="">

  <!-- component -->
<div class="flex flex-wrap bg-gray-100 w-full ">
  <div class="w-3/12 bg-white p-3 shadow-sm ">
      <div class="flex items-center space-x-4 p-2 mt-5 mb-5">
          <img class="h-12 rounded-full" src="{{asset('/images/user.png')}}" alt="James Bhatta">
          <div>
              <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{{-- {{ Auth::user()->name }} --}} Username</h4>
              <span class="text-sm tracking-wide flex items-center space-x-1">
                  <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg><span class="text-gray-600">{{-- {{ Auth::user()->name }} --}} User type</span>
              </span>
          </div>
      </div>
      <ul class="space-y-2 text-sm ">
          <li>
            <div class="flex flex-row justify-center hover:bg-gray-100 rounded-md  ">
                <div class="flex-none">
                    <div class="flex items-center  text-gray-700 ">
                        <span class="text-gray-600 -ml-9">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <button onclick="showDropdownOptions()" class="flex flex-row justify-between w-48 py-2 text-gray-700 focus:outline-none focus:border-blue-600 ml-4">
                            
                            <span class="select-none">Dashboard</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                    
                    <div id="options" class="hidden w-48 py-2 mt-2 mb-1 bg-white rounded-lg">
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-300 no-underline hover:text-black">Toutes annonces</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-300 no-underline hover:text-black">Annonces encore</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-300 no-underline hover:text-black">Toutes informations</a>
                        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-300 no-underline hover:text-black">Information encore</a>
                    </div>
                </div>
            </div>
            <script>
                function showDropdownOptions() {
                    document.getElementById("options").classList.toggle("hidden");
                    document.getElementById("arrow-up").classList.toggle("hidden");
                    document.getElementById("arrow-down").classList.toggle("hidden");
                }
            </script>
            
          </li>
          <li>
              <a href="/annonces/create" class="no-underline flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-gray-600">
                      {{-- <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg> --}}
                      <img src="{{asset('/images/add.png')}}" alt="+" class="h-5">
                  </span>
                  <span> Annonce</span>
              </a>
          </li>
          <li>
              <a href="/information/create" class="no-underline flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-gray-600">
                      {{-- <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                      </svg> --}}
                      <img src="{{asset('/images/info.png')}}" alt="+" class="h-5">
                  </span>
                  <span> Information</span>
              </a>
          </li>
          <li>
            @auth
            <a href="/home/test" class="no-underline flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span class="text-gray-600">
                    <img src="{{asset('/images/ecran.png')}}" alt="+" class="h-5">
                </span>
                <span>Test d'ecran</span>
            </a>
            @endauth
        </li>
          <li>
              <a href="#" class="no-underline flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-gray-600">
                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                  </span>
                  <span>Mon profile</span>
              </a>
            </li>
          <li>
              <a href="#" class="no-underline flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-gray-600">
                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                  </span>
                  <span>Déconnexion</span>
              </a>
          </li>
      </ul>
  </div>

    <div class="w-9/12 bg-gray-50 mb-8">
        @if (Route::get('/home/dashboard'))
            <div>@yield('pubs')</div>
        @endif

        @if (Route::get('/annonces/create'))
            <div>@yield('createAnn')</div>
        @endif

        @if (Route::has('modifierAnnonce'))
            <div>@yield('modifierAnn')</div>
        @endif
            
        @if (Route::get('/information/create'))
            <div>@yield('createInfo')</div>
        @endif
        

            {{-- <div>@yield('create')</div> --}}
    </div>
</div>
    
</div>
@endsection
