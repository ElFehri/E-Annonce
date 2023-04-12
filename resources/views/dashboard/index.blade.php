@extends('home')
@section('pubs')
<div class=""><h1 class="text-center font-bold text-sky-800 mt-8">Annonces encore</h1></div>
@if (count($annonces)>0)
@foreach ($annonces as $annonce)     
<div class="mx-4 my-2 shadow-lg rounded-md bg-white w-auto px-4 py-2 ">
    
    <div class="flex flex-wrap justify-between ">
        <div class="font-bold">Creator name</div>
        <div class="font-bold">{{$annonce->created_at }}</div>
        <form action="{{route('annonces.destroy', $annonce->pub_id)}}">
            @csrf
            @method('DELETE')
            <button type="submit"><strong>X </strong></button>
        </form>
    </div>
    <div class=" bg-gray-50 rounded-md  ">
        <h4 class="text-center text-xl mt-6"> {{$annonce->title}}</h4>
    <div class="p-4">{{ $annonce->content}}</div>
</div>
<div class="flex flex-wrap justify-around mt-2">
{{--  --}}     <div class="font-bold"><button class="bg-red-200 hover:bg-red-400 rounded-full px-2 py-1 ">Modifier</button></div>
     <div class="font-bold"><button class="bg-green-200 hover:bg-green-400 rounded-full px-2 py-1 ">Valider</button></div>
</div>
</div>
@endforeach
@else
    <div class="bg-red-200 py-4 m-8 rounded-lg font-bold text-center">Pas d'annonce disponible aujourd'hui</div>
@endif

<div class=""><h1 class="text-center font-bold text-sky-800 mt-12">Information encore</h1></div>

@if (count($information)>0)
@foreach ($information as $info)
<div class="mx-4 my-2 shadow-lg rounded-md bg-white w-auto px-4 py-2 ">
    <div class="flex flex-wrap justify-between ">
        <div class="font-bold">Creator name</div>
        <div class="font-bold">{{ $info->created_at }}</div>
        <div class="font-bold">
            <form action="{{route('information.destroy', $info->pub_id)}}">
                @csrf
                @method('DELETE')
                <button type="submit"><strong>X </strong></button>
            </form>
        </div>
    </div>
    <div class=" bg-gray-50 rounded-md  ">
        <div class="p-4">{{ $info->content }} </div>
    </div>
    <div class="flex flex-wrap justify-around mt-2">
        <div class="font-bold"><button class="bg-red-200 hover:bg-red-400 rounded-full px-2 py-1 ">Rejouter</button></div>
        <div class="font-bold"><button class="bg-green-200 hover:bg-green-400 rounded-full px-2 py-1 ">Valider</button></div>
    </div>
</div>
@endforeach
@else
<div class="bg-red-200 py-4 m-8 rounded-lg font-bold text-center">Pas d'information disponible aujourd'hui</div>
@endif
@endsection