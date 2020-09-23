<template>
  <footer>
    <div class="container">
      <div class="footer--content">
        <div class="footer--ico">
          <img src="/images/footer-ico.png" />
        </div>
        <div class="footer--text">
          En este link podrás resolver todas tus dudas sobre nuestros protocolos
          de cara al
          <a href="#"> COVID-19 </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  height: 100px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
}

.footer--content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer--content a {
  color: #00a8cd;
  text-decoration: none;
}

@media (max-width: 768px) {
  footer {
    padding: 1rem 0;
    height: auto;
    text-align: center;
  }
  .footer--content {
    flex-wrap: wrap;
  }
  .footer--ico {
    flex: 0 0 100%;
  }
}
</style>
