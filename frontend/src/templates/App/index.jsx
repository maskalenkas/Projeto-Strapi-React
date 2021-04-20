import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Base {...mockBase} />
    </div>
  );
}

export default Home;
