const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');

function changeTheme() {
  if (checkbox.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', theme.DARK);
  } else {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', theme.LIGHT);
  }
  if (checkbox.checked && document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
  }
}

function saveLocalValue() {
  const localValue = localStorage.getItem('theme');
  if (localValue === theme.DARK) {
    checkbox.checked = true;
    document.body.classList.add('dark-theme');
  }
}

saveLocalValue();

checkbox.addEventListener('change', changeTheme);
