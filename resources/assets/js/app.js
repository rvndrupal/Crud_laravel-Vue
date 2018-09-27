new Vue({

    el: '#crud',

    created: function() {
        this.getKeeps();
    },

    data: {
        tareas: [],
        newKeep: '',
        fillKeep: { 'id': '', 'tarea': '' },
        errors: []
    },

    methods: {

        getKeeps: function() {
            var url = 'task';
            axios.get(url).then(response => {
                this.tareas = response.data
            });

        },

        editKeep: function(tar) {
            this.fillKeep.id = tar.id;
            this.fillKeep.tarea = tar.tarea;
            $('#edit').modal('show');
        },

        updateKeep: function(id) {
            var url = 'task/' + id;
            axios.put(url, this.fillKeep).then(response => {
                this.getKeeps();
                this.fillKeep = { 'id': '', 'tarea': '' };
                this.errors = [];
                $('#edit').modal('hide');
                toastr.success('Actualizado Correctamente');

            }).catch(error => {
                this.errors = error.response.data
            });
        },



        deleteKeep: function(tar) {
            //alert("Eliminar" + tar.id);
            var url = 'task/' + tar.id;
            axios.delete(url).then(response => {
                this.getKeeps();
                toastr.success('Eliminado Correctamente');
            });
        },



        createKeep: function() {
            var url = 'task';
            axios.post(url, {
                tarea: this.newKeep
            }).then(response => {
                this.getKeeps();
                this.newKeep = '';
                this.errors = [];

                $('#create').modal('hide');
                toastr.success('Nuevo Registro con exito');

            }).catch(error => {
                this.errors = error.response.data
            })
        },

    },
});