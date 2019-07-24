// truncate
const truncate = (str, maxLength, ending) => {
  return ((str.length > maxLength) ? str.slice(0, maxLength) + ending : str);
};

const truncateMsg = () => {
  const elMsg = document.querySelectorAll('[max-length]');

  if (elMsg.length === 0) return;

  elMsg.forEach((el) => {
    const $that = el;
    const endingHtml = '...';
    const maxLength = $that.getAttribute('max-length');

    if ($that.textContent.length < maxLength) return;
    $that.innerHTML = truncate($that.textContent, maxLength, endingHtml);
  });
};

truncateMsg();
