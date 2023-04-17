<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use App\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class AnnonceController extends Controller
{
    public function index()
    {
        $annonces = DB::table('annonces')
            ->join('publications', 'annonces.pub_id', '=', 'publications.id')
            ->where('publications.type', '=', 'Annonce')
            ->get();

        return view('annonces.index', compact('annonces'));
    }

    public function create()
    {
        return view('annonces.create');
    }

    public function store(Request $request)
    {
        $user = new User;
        $publication = new Publication;
        $publication->type = "Annonce";
        $publication->user_id = 1 /* $user->id */;
        $publication->start_date = $request->input('start_date');
        $publication->end_date = $request->input('end_date');
        $publication->save();

        $annonce = new Annonce;
        $annonce->title = $request->input('title');
        $annonce->content = $request->input('content');
        $annonce->pub_id = $publication->id;
        $annonce->save();

        return view('annonces.create') /* redirect()->route('createAnnocne') */;
    }

    public function show($pub_id)
    {
        $annonce = Annonce::where('annonces.pub_id', $pub_id)->first();
        $publication = Publication::where('publications.id', $pub_id)->first();

        return view('annonces.show', compact('annonce','publication'));
    }

    public function edit($pub_id)
    {
        $annonce = Annonce::where('annonces.pub_id', $pub_id)->first();
        $publication = Publication::where('publications.id', $pub_id)->first();
    
        return view('annonces.edit', compact('annonce', 'publication'));
    }

    public function update(Request $request, Annonce $annonce)
    {
        $publication = Publication::find($annonce->pub_id);
        $publication->start_date = $request->input('start_date');
        $publication->end_date = $request->input('end_date');
        $publication->save();

        $annonce->content = $request->input('content');
        $annonce->title = $request->input('title');
        $annonce->save();

        return redirect()->route('toDash');
    }

    public function destroy($pub_id)
    {
        $annonce = Annonce::where('annonces.pub_id', $pub_id)->first();
        $publication = Publication::where('publications.id', $pub_id)->first();
        $publication->delete();
        $annonce->delete();

        return redirect()->route('annonces.index');
    }
}
