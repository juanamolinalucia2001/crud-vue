<template>
<v-app>


    <v-container grid-list-xl>
        <v-layout row wrap>

            <v-flex md6 >
                <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index"> 
                    <v-card-text>
                       
                        <v-chip class="ma-2 ml-0 mb-6" color="pink" label text-color="white">
                             <v-icon left>mdi-label</v-icon>
                            {{item.titulo}}
                        </v-chip>
                        <p>{{item.descripcion}}</p>
                        <v-row  align="center" justify="space-around">
                        <v-btn color="warning" class="mt-6 mb-3" @click="editar(index)">Editar</v-btn>
                        <v-btn color="error" class="mt-6 mb-3" @click="eliminarTarea(item.id)">Eliminar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>



            </v-flex>

            <v-flex md6 v-if="formAgregar">
                <v-card class="mb-3 pa-6">
                    <v-form @submit.prevent="agregarTarea">
                        <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Desscripción de tarea" v-model="descripcion"></v-textarea>
                        <v-btn color="success" block type="submit">Agregar Tarea</v-btn>
                    </v-form>
                </v-card>

            </v-flex>

            <v-flex md6 v-if="!formAgregar">
                <v-card class="mb-3 pa-6">
                    <v-form @submit.prevent="agregarTareaEditada    ">
                        <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Desscripción de tarea" v-model="descripcion"></v-textarea>
                        <v-btn color="warning" block type="submit">Editar Tarea</v-btn>
                    </v-form>
                </v-card>

            </v-flex>
        </v-layout>

             <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}

    
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
    </v-snackbar>
    </v-container>
</v-app>    
</template>
<script>
export default {
    data(){
        return{
            listaTareas:[
                {id: 1, titulo: 'Titulo tarea #1', descripcion:'El niño salió a pasear por el campo y vio una oveja que parecía estar sola y perdida. La llevó hasta el río para que tomara un poco de agua y después la alcanzó hasta la casa de la vecina que¡ tenía muchas ovejas. La vecina le agradeció porque era su oveja'},
                {id: 6, titulo: 'Titulo tarea #2', descripcion:'El niño salió a pasear por el campo y vio una oveja que parecía estar sola y perdida. La llevó hasta el río para que tomara un poco de agua y después la alcanzó hasta la casa de la vecina que¡ tenía muchas ovejas. La vecina le agradeció porque era su oveja, que se había perdido el día anterior mientras estaba pastando'},
                
            ],
            titulo:'',
            descripcion:'',
            mensaje:'ajnsjknd',
            snackbar:false,
            formAgregar:true,
        }
    },
    methods:{
        agregarTarea(){
            // console.log(this.titulo, this.descripcion)
            if(this.titulo === '' || this.descripcion===''){
                this.snackbar = true
                this.mensaje='Llena todos los campos'
            }else{
                this.listaTareas.push({
                    id:Date.now(), 
                    titulo:this.titulo,
                    descripcion:this.descripcion
                })
                this.titulo=''
                this.descripcion=''
                this.snackbar = true
                this.mensaje='Tarea agregada con exito!'

            }
        },
        eliminarTarea(id){
                this.listaTareas = this.listaTareas.filter(e => e.id != id)

            },
        editar(index){
            this.formAgregar = false
            this.titulo = this.listaTareas[index].titulo
            this.descripcion =this.listaTareas[index].descripcion
            this.indexTarea= index

        },
        agregarTareaEditada(){
            this.listaTareas[this.indexTarea].titulo = this.titulo
            this.listaTareas[this.indexTarea].descripcion = this.descripcion
            this.formAgregar = true
            this.titulo=''
            this.descripcion=''
            this.snackbar = true
            this.mensaje='Tarea Editada con exito!'
        }
    }
}
</script>