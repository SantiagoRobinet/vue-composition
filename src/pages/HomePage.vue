<script setup lang="ts"></script>

<template>
  <div class="container">
    <img
      class="logo"
      alt="Vue logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <img
      class="rotate"
      alt="Rick and Morty logo"
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc4e765d-760d-45dc-9f31-58d1bd0eb872/dc4z89w-641684e2-15ca-497b-b5ca-c331e7e055b6.png/v1/fill/w_1024,h_1024,strp/rick_and_morty_portal_1___free_download_by_loaf_of_muffin_dc4z89w-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZjNGU3NjVkLTc2MGQtNDVkYy05ZjMxLTU4ZDFiZDBlYjg3MlwvZGM0ejg5dy02NDE2ODRlMi0xNWNhLTQ5N2ItYjVjYS1jMzMxZTdlMDU1YjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5PeSWIoX1cFhDXi8nbPstLGpqjyYC0D9r5rBPrjKbh0"
      width="125"
      height="125"
    />
  </div>
</template>
<style scoped>
.container {
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo {
  position: absolute;
  z-index: 10;
}
.rotate {
  height: 700px;
  width: 700px;
  animation: rotation 6s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
