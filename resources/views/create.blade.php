<form method="POST" v-on:submit.prevent="createKeep">
<div class="modal fade" id="create">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
                <h1>Nueva </h1>
            </div>


            <div class="modal-body">
                <label for="tarea">Tarea</label>
                <input type="text" name="tarea" class="form-control" v-model="newKeep" >
                <span v-for="error in errors" class="text-danger">@{{ error }}</span>
            </div>


            <div class="modal-footer">
                <input type="submit" class="btn btn-primary" value="Guardar">
            </div>
        </div>
    </div>

</div>

</form>