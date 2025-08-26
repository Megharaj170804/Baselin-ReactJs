import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ChapterLayout from '../../components/ChapterLayout';

const Modal = ({ isOpen, onClose, title, children, size = 'md' }: any) =>
  isOpen ? createPortal(
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="flex items-center justify-center min-h-full">
        <div className={`bg-white rounded p-6 w-full max-w-${size === 'lg' ? '4xl' : size === 'md' ? 'lg' : 'md'}`}>
          <div className="flex justify-between mb-4">
            <h3>{title}</h3>
            <button onClick={onClose}>×</button>
          </div>
          {children}
        </div>
      </div>
    </div>, document.body
  ) : null;

const Toast = ({ isVisible, onClose, type, message }: any) =>
  isVisible ? createPortal(
    <div className="fixed top-4 right-4 z-50">
      <div className={`px-4 py-2 rounded ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'} text-white flex`}>
        <span className="mr-2">{type === 'success' ? '✓' : type === 'error' ? '✗' : type === 'warning' ? '⚠' : 'i'}</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2">×</button>
      </div>
    </div>, document.body
  ) : null;

const Tooltip = ({ children, content }: any) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>{children}</span>
      {show && createPortal(
        <div style={{ position: 'fixed', top: 100, left: 100 }} className="bg-gray-800 text-white px-2 py-1 rounded">{content}</div>,
        document.body
      )}
    </>
  );
};

const Sidebar = ({ isOpen, onClose }: any) =>
  isOpen ? createPortal(
    <div className="fixed inset-0 z-40">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-64 bg-white p-6">
        <div className="flex justify-between mb-4">
          <h3>Settings</h3>
          <button onClick={onClose}>×</button>
        </div>
        <div>
          <label><input type="checkbox" defaultChecked /> Notifications</label>
          <label><input type="checkbox" /> Dark mode</label>
        </div>
      </div>
    </div>, document.body
  ) : null;

const Chapter19: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', msg: '' });

  const showToast = (type: string, msg: string) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2000);
  };

  return (
    <ChapterLayout chapterNumber={19} title="React Portals" description="Render components outside parent DOM with portals">
      <button onClick={() => setModal(true)}>Open Modal</button>
      <button onClick={() => setLargeModal(true)}>Large Modal</button>
      <button onClick={() => setSidebar(true)}>Sidebar</button>
      <button onClick={() => showToast('success', 'Success!')}>Toast</button>
      <Tooltip content="Tooltip!">
        <button>Hover me</button>
      </Tooltip>
      <Modal isOpen={modal} onClose={() => setModal(false)} title="Modal">
        <p>This modal uses a portal.</p>
        <button onClick={() => setModal(false)}>Close</button>
      </Modal>
      <Modal isOpen={largeModal} onClose={() => setLargeModal(false)} title="Large Modal" size="lg">
        <p>Large modal content.</p>
        <button onClick={() => setLargeModal(false)}>Close</button>
      </Modal>
      <Sidebar isOpen={sidebar} onClose={() => setSidebar(false)} />
      <Toast isVisible={toast.show} type={toast.type} message={toast.msg} onClose={() => setToast(t => ({ ...t, show: false }))} />
    </ChapterLayout>
  );
};

export default Chapter19;