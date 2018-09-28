new Vue({

    el: '#crud',

    created: function() {
        this.getKeeps();
    },

    data: {
        tareas: [],
        pagination: {
            'total': 0,
            'current_page': 0,
            'per_page': 0,
            'last_page': 0,
            'from': 0,
            'to': 0
        },
        newKeep: '',
        fillKeep: { 'id': '', 'tarea': '' },
        errors: [],
        offset: 3
    },

    computed: {
        isActived: function() {
            return this.pagination.current_page;
        },
        pagesNumber: function() {
            if (!this.pagination.to) {
                return [];
            }

            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }

            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            var pagesArray = [];

            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

    methods: {

        getKeeps: function(page) {
            var url = 'task?page=' + page;
            axios.get(url).then(response => {
                this.tareas = response.data.task.data,
                    this.pagination = response.data.pagination
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

        changePage: function(page) {

            this.pagination.current_page = page;
            this.getKeeps(page);
        },

    },
});