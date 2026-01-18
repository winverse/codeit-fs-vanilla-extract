import { Button } from '../Button';
import {
  modal,
  modalActions,
  modalBody,
  modalTitle,
  overlay,
} from './Modal.css.js';

// 🎯 숙제: Modal 컴포넌트를 직접 구현해보세요!
//
// 요구사항:
// 1. 오버레이(배경)를 클릭하면 onClose가 실행되어야 해요
// 2. 모달 내부를 클릭했을 때는 닫히면 안 돼요 (event.stopPropagation 활용)
// 3. 접근성을 위해 role="dialog", aria-modal="true" 속성을 추가해보세요

export default function Modal({ title, children, onClose }) {
  // TODO: 모달 내부 클릭 시 이벤트 전파를 막는 함수를 작성하세요
  const handleClick = (event) => {
    // 여기에 코드를 작성하세요
  };

  // TODO: onClose가 없을 때를 대비한 안전한 처리를 추가하세요
  const handleClose = () => {
    // 여기에 코드를 작성하세요
  };

  return (
    <div className={overlay} onClick={handleClose}>
      {/* TODO: section에 적절한 접근성 속성을 추가하세요 */}
      <section className={modal} onClick={handleClick}>
        <h2 className={modalTitle}>{title}</h2>
        <div className={modalBody}>{children}</div>
        <div className={modalActions}>
          <Button variant="ghost" onClick={handleClose}>
            닫기
          </Button>
        </div>
      </section>
    </div>
  );
}
