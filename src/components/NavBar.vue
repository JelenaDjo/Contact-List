<template>
<div> 
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Our first Vue App </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <router-link class="nav-link" to="contacts"> Contacts </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="add-contact"> Add Contact</router-link>
      </li>
     
      </li>
    </ul>
  </div>
</nav>
</div>
</template>




<script>
export default {
    
}
</script>

