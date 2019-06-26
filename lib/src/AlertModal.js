import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import Classic from "./components/classic/Classic";
import { getStatusBarHeight } from "./helpers/helpers";
import LinearGradient from "react-native-linear-gradient";
import styles, { container, stickOnTop } from "./AlertModal.style";
import ClassicOnlyText from "./components/classicOnlyText/ClassicOnlyText";
import ClassicWithIcon from "./components/classicWithIcon/ClassicWithIcon";
import ClassicTriple from "./components/classicTriple/ClassicTriple";
import ClassicTripleWithIcon from "./components/classicTripleWIthIcon/ClassicTripleWithIcon";

const AlertModal = props => {
  const {
    type,
    height,
    locations,
    component,
    isVisible,
    hasBackdrop,
    gradientColors,
    containerPaddingTop
  } = props;

  function selectType() {
    switch (type) {
      case "classic":
        return <Classic />;
      case "classicOnlyText":
        return <ClassicOnlyText />;
      case "classicWithIcon":
        return <ClassicWithIcon />;
      case "classicTriple":
        return <ClassicTriple />;
      case "classicTripleWithIcon":
        return <ClassicTripleWithIcon />;
      default:
        return <Classic />;
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      animationOut="fadeInUp"
      animationInTiming={600}
      animationOutTiming={600}
      animationIn="fadeInDown"
      hasBackdrop={hasBackdrop}
      style={styles.modalStyle}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <LinearGradient
        colors={gradientColors}
        locations={locations}
        style={[container(height, containerPaddingTop), stickOnTop()]}
      >
        {component || selectType()}
      </LinearGradient>
    </Modal>
  );
};

AlertModal.propTypes = {
  isVisible: PropTypes.bool,
  hasBackdrop: PropTypes.bool,
  gradientColors: PropTypes.array,
  locations: PropTypes.array,
  height: PropTypes.number,
  containerPaddingTop: PropTypes.number
};

AlertModal.defaultProps = {
  isVisible: true,
  hasBackdrop: false,
  locations: [0.3, 0.6],
  containerPaddingTop: 32,
  height: getStatusBarHeight() + 360,
  gradientColors: ["white", "#ffffff00"]
};

export default AlertModal;
