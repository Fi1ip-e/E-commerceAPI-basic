export function renderLoading(container, text = 'Carregando...') {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center min-h-[200px] gap-4">
        <div class="h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <p class="text-gray-600 text-sm">${text}</p>
      </div>
    `;
}
