import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './target.module.css';
type Target = { name: string; completed: boolean; id: number };

interface Props {
  ModalClose: () => void;
  handleTargets: (target: Target) => void;
}

type FormChange = ChangeEvent<HTMLInputElement>;
type FormSubmit = FormEvent<HTMLFormElement>;

const Modal = ({ ModalClose, handleTargets }: Props) => {
  const [name, setName] = useState('');

  const handleChange = (event: FormChange) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormSubmit) => {
    event.preventDefault();
    handleTargets({
      name,
      completed: false,
      id: Math.floor(Math.random() * 200),
    });
    setName('');
    ModalClose();
  };
  return (
    <>
      <section className={styles.modal} onClick={ModalClose}></section>

      <section className={styles.modal_sub}>
        <h3 className="text-center">Who's your next target ?</h3>
        <form
          className="my-6 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <label className="block px-10 w-full">
            <input
              type="text"
              name=""
              id=""
              className="w-full border-2 rounded-md py-1 px-3 outline-none"
              value={name}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="uppercase inline-block bg-black text-white py-2 px-6 rounded-md text-sm my-3"
          >
            Add target
          </button>
        </form>
      </section>
    </>
  );
};

export default Modal;
