@extends('home')

@section('createAnn')

<div class="flex flex-col items-center justify-center mt-8">
    <div class="w-full max-w-lg">
        <form method="POST" action="{{ route('annonces.store') }}" class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            @csrf
			<h2 class="text-center font-bold text-3xl mb-3">Nouveau Annonce</h2>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="title">
                    Title
                </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="title" type="text" placeholder="Titre d'annonce" required>
            </div>
            <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="content">
                Description
                </label>
               <textarea class="form-input rounded-md shadow-sm mt-1 block w-full pl-4 border-2 " id="content" name="content" rows="5" placeholder="Description"></textarea>
            </div>
            
            <div class="form-group text-gray-700 font-bold mb-2">
              <label for="start_date">Date et heure de début:</label>
              <input type="datetime-local" class="form-control" id="start_date" name="start_date"  required>
            </div>
          
            <div class="form-group text-gray-700 font-bold mb-2">
              <label for="end_date">Date et heure de fin:</label>
              <input type="datetime-local" class="form-control" id="end_date" name="end_date"  required>
            </div>
            <div class="flex items-center justify-between mt-4 ">
                <a href="{{ route("toDash") }}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline no-underline ">Retourne</a>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Creer
                </button>
                
            </div>
        </form>
    </div>
</div>
@endsection
