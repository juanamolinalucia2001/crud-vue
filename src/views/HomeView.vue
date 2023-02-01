<template>
<v-card
  max-width="450"
  class="mx-auto"
>
  <v-carousel v-model="model" class="mt-10" >
    <v-carousel-item
      v-for="(item, i) in colors"
      :key="i"
    >
      <v-sheet
        :color="item.color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div
          align="center"
          justify="center"
          >
           <p class="white--text"> {{item.texto}}</p>
            <v-btn dark class="deep-purple" :to="{name:'tareas-crud'}">
           Comenzar
          </v-btn> 
          </div>
        </v-row> 
           
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</v-card> 
</template>

<script>
  

  export default {
    name: 'Home',

    components: {
      
    },
    data(){
      return{
        model: 0,
        colors: [
        {color:'primary',texto:'Organiza tu trabajo y tu vida, por fin.'},
        {color:'secondary',texto:'Concéntrate, organízate y trae calma a tu vida con Todoist. '},
        {color:'yellow darken-2',texto: 'La aplicación de gestión de tareas n.º 1 del mundo.'}
      ],
      }
    }

  }
</script>
