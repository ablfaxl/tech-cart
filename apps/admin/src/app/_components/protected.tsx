type Props = {
  Component: React.FunctionComponent;
};

export const ProtectedPage: React.FC<Props> = ({ Component }) => {
  return <Component />;
};
