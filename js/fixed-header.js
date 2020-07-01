// Скрипт для непрохождения контента под фиксированую шапку
<script>
    const { height: pageHeaderHeight } = document
      .querySelector(".page-header")
      .getBoundingClientRect();

    document.body.style.paddingTop = `${pageHeaderHeight}px`;
</script>