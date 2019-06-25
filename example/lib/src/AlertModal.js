import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import Classic from "./components/classic/Classic";
import { getStatusBarHeight } from "./helpers/helpers";
import LinearGradient from "react-native-linear-gradient";
import styles, { container, stickOnTop } from "./AlertModal.style";
import ClassicOnlyText from "./components/classicOnlyText/ClassicOnlyText";

const AlertModal = props => {
  const {
    height,
    locations,
    component,
    isVisible,
    hasBackdrop,
    gradientColors,
    containerPaddingTop
  } = props;
  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={hasBackdrop}
      animationIn="fadeInDown"
      animationOut="fadeInUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.modalStyle}
    >
      <LinearGradient
        colors={gradientColors}
        locations={locations}
        style={[container(height, containerPaddingTop), stickOnTop()]}
      >
        {component || <ClassicOnlyText />}
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
  gradientColors: ["white", "#ffffff00"],
  locations: [0.3, 0.6],
  height: getStatusBarHeight() + 350,
  containerPaddingTop: getStatusBarHeight() + 8
};

export default AlertModal;
