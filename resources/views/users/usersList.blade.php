@extends('layouts.app')
@section('content')
    <div class="grid grid-flow-row grid-cols-4">

        @foreach ($users as $user)
            <div class="bg-blue-100 m-4 p-4">
                <h1 class="font-bold text-lx">{{ $user->name}}</h1>
                <p class="text-center">{{ $user->email}}</p>
            </div>
        @endforeach
        
    </div>
@endsection