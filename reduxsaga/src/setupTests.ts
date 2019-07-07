// Enzyme Imports
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// React Testing Library Imports
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

export default undefined;