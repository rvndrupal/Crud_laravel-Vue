@extends('app')


@section('content')
    
    <div id="crud" class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Crud Laravel y Vue</h1>
        </div> 

        <div class="col-sm-7">
            <a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">Nueva Tarea</a>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarea</th>
                        <th colspan="2">&nbsp</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="tar in tareas">
                        <td width="10px">@{{ tar.id }}</td>
                        <td>@{{ tar.tarea }}</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(tar)">Editar </a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(tar)">Eliminar </a>
                        </td>
                    </tr>
                </tbody>

            </table>


            @include('create')
            @include('edit')

        </div>

        <div class="col-sm-5">
                <pre>
                    @{{ $data }}
                </pre>
        
        </div>

    </div>

    


@endsection