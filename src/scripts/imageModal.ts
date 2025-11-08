class AstroImageModal extends HTMLElement {
  connectedCallback() {
    const modal = this.querySelector('#image-modal') as HTMLElement;
    const modalImage = this.querySelector('#modal-image') as HTMLImageElement;
    const closeButton = this.querySelector('#modal-close') as HTMLButtonElement;

    if (!modal || !modalImage) return;

    const openModal = (imageSrc: string, imageAlt: string) => {
      modalImage.src = imageSrc;
      modalImage.alt = imageAlt || '확대된 이미지';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      closeButton?.focus();
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    };

    // 이미지 클릭 이벤트 리스너 추가
    const initImageModal = () => {
      const techArticle = document.querySelector('.tech');
      if (!techArticle) return;

      const images = techArticle.querySelectorAll<HTMLImageElement>('img');
      
      images.forEach((img) => {
        if (img.dataset.modalEnabled === 'true') return;
        
        img.dataset.modalEnabled = 'true';
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', (e) => {
          e.preventDefault();
          const imageSrc = img.src || img.getAttribute('src') || '';
          const imageAlt = img.alt || '';
          
          if (imageSrc) {
            openModal(imageSrc, imageAlt);
          }
        });
      });
    };

    // 모달 닫기 이벤트
    closeButton?.addEventListener('click', closeModal);
    
    // 확대된 이미지 클릭 시 닫기
    modalImage.addEventListener('click', closeModal);
    
    // 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // 페이지 로드 후 초기화
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initImageModal);
    } else {
      initImageModal();
    }

    // Astro View Transitions 지원
    document.addEventListener('astro:page-load', initImageModal);
  }
}

customElements.define('astro-image-modal', AstroImageModal);

