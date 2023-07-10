import { useNavigate, useParams } from 'react-router-dom';
import ArrowIcon from '../../components/Icons/arrow';
import DotsIcon from '../../components/Icons/dots';
import PlusIcon from '../../components/Icons/plus';
import { useState } from 'react';
import Modal from './targetModal';
import styles from './target.module.css';
import cls from 'classnames';

import Container from '../container';
import CheckIcon from '../Icons/check';
import CancelIcon from '../Icons/cancel';

type Target = { name: string; completed: boolean; id: number };

type TargetsType = {
  targets: {
    name: string;
    completed: boolean;
    id: number;
  }[];
};

const Targets = () => {
  const [targets, setTargets] = useState<TargetsType['targets']>([
    { name: 'cersei', completed: false, id: 0 },
  ]);
  const { name } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    name && navigate(`/${name}`);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleTargets = (newTarget: Target) => {
    setTargets((prev) => [newTarget, ...prev]);
  };

  const handleCompleted = (id: number) => {
    console.log(id);
    const newTargets = targets.map((target) =>
      target.id === id ? { ...target, completed: !target.completed } : target
    );
    setTargets(newTargets);
  };

  const handleDelete = (id: number) => {
    const newTargets = targets.filter((target) => target.id !== id);
    setTargets(newTargets);
  };
  return (
    <>
      <Container>
        <aside className="flex items-center justify-between bg-white p-2 px-3">
          <div className="flex items-center">
            <ArrowIcon handleClick={handleNavigate} />
            <h3 className="ml-3 capitalize font-semibold">Targets</h3>
          </div>
          <div>
            <DotsIcon />
          </div>
        </aside>
        <article className="min-h-[400px]">
          {targets.map((target, id) => (
            <section
              key={id}
              className={
                !target.completed
                  ? cls(styles.targets)
                  : cls(styles.targets, 'line-through text-gray-500')
              }
            >
              <h4>{target.name}</h4>

              <div className="flex w-14 justify-between">
                <aside onClick={() => handleCompleted(target.id)}>
                  {target.completed ? <CheckIcon /> : <input type="radio" />}
                </aside>
                <aside onClick={() => handleDelete(target.id)}>
                  <CancelIcon />
                </aside>
              </div>
            </section>
          ))}
        </article>
        <footer className={styles.footer} onClick={handleModalOpen}>
          <PlusIcon />

          <p className="mx-2 tracking-wider">ADD NEW</p>
        </footer>
      </Container>

      {modalIsOpen && (
        <Modal ModalClose={handleModalClose} handleTargets={handleTargets} />
      )}
    </>
  );
};

export default Targets;
