import SimpleButton from '../../components/simple-button/simple-button';

SimpleButton;

const MyHeader = () => {
  return (
    <header id="top">
      nola&apos;s portfolio
      {['Top', 'Skills', 'Projecta', 'Others'].map((t) => {
        return (
          <SimpleButton key={`headre-${t}-button`}>
            {t}
          </SimpleButton>
        );
      })}
    </header>
  );
};

export default MyHeader;
