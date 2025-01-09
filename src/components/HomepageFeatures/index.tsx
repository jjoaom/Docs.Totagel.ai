import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { IconType } from 'react-icons';
import { FaImage, FaComment, FaMicrophone, FaSearch, FaFileAlt, FaExclamationTriangle } from 'react-icons/fa';


type FeatureItem = {
  title: string;
  Icon: IconType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Criação e Edição de Conteúdo',
    Icon: FaFileAlt,
    description: (
      <>
        Crie e edite conteúdos incríveis rapidamente com ferramentas de IA
      </>
    ),
    
  },
  {
    title: 'Geração de Imagens IA',
    Icon: FaImage,
    description: (
      <>
        Use IA para criar qualquer arte ou imagem
      </>
    ),

  },
  {
    title: 'Narração e Áudio',
    Icon: FaMicrophone,
    description: (
      <>
        Faça narrações com qualidade de estúdio e converta áudio em texto e vice-versa
      </>
    ),

  },
  {
    title: 'Interação com IA',
    Icon: FaComment,
    description: (
      <>
        Interaja com IA para assistentes virtuais e bate-papo inteligente
      </>
    ),

  },
  {
    title: 'Visão Computacional e Desenvolvimento',
    Icon: FaSearch,
    description: (
      <>
        Explore a inteligência artificial aplicada à visão computacional e desenvolvimento de código
      </>
    ),

  },
  {
    title: 'Análise de Conteúdo',
    Icon: FaExclamationTriangle,
    description: (
      <>
        Analise e verifique plágio e conteúdo gerado por IA
      </>
    ),

  },
];

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className="p-2" role="img" size="3em" />
      </div>
      <div className="text--center padding-horiz--md flex-grow-1">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--center">
          <a href="/docs/intro" className="button button--primary" style={{ fontSize: '1.25em', padding: '0.75em 1.5em', borderRadius: '0.5em' }}>
            Ver Tutoriais
          </a>
        </div>
      </div>
    </section>
  );
}
