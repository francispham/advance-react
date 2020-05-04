import { useToggle } from '../../hooks';

// Children Render Props with Custom Hook:
const Toggle = ({ children }) => children(useToggle(false));

export default Toggle;
