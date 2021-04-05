<template>
  <div class="home">
    <h1 class="shadow">Välkommen till en rolig webbshop</h1>
    <div id="carouselExampleSlidesOnly" class="carousel pt-4 slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3clGU-sRQGhgq9s-aLU_u-ioZkE5xLDFbdPgWPOeuXqXO5XGQsGh3rgHra5rnP9oOXHqjc-hakIQQMMzXT3lmB_QH7d-i1sQmefQNQE3TD9YL09oSOag07Nti3ptjCEirLxPAHCs7OLeUsHgJq_NeI=w720-h540-no"
        class="d-block w-100 shadow"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://i.ytimg.com/vi/KshHuLKlmXg/maxresdefault.jpg"
        class="d-block w-100 shadow"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://miro.medium.com/max/3000/1*As47TnfoGJmcK4PvSE3Lcw.jpeg"
        class="d-block w-100 shadow"
        alt="..."
      />
    </div>
  </div>
</div>

</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>


<style scoped>

  h1 {
    background-color: lightgrey;
  }
  .home {
    min-height: 100vh;
       
  }
  .sign {
    max-height: 300px; 
  }
  img {
    max-height: 700px;
    max-width: 1200px;
    margin: auto;
  }
</style>