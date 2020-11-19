import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Emoji } from "emoji-mart";

import { Time, IconReaded, Avatar } from "../";

import { convertCurrentTime } from "utils/helpers";

import waveSvg from "assets/img/wave.svg";
import pauseSvg from "assets/img/pause.svg";
import playSvg from "assets/img/play.svg";

import "./Message.scss";

const Message = ({
  user,
  text,
  date,
  audio,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  const AudioMessage = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElem = useRef(null);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      audioElem.current.volume = "0.1";
      audioElem.current.addEventListener(
        "playing",
        () => {
          setIsPlaying(true);
        },
        false
      );
      audioElem.current.addEventListener(
        "ended",
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        },
        false
      );
      audioElem.current.addEventListener(
        "pause",
        () => {
          setIsPlaying(false);
        },
        false
      );
      audioElem.current.addEventListener("timeupdate", () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100);
      });
    }, []);

    const togglePlay = () => {
      if (!isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    };

    return (
      <div className="message__audio">
        <audio ref={audioElem} src={audio} preload="auto" />
        <div
          className="message__audio-progress"
          style={{ width: progress + "%" }}
        ></div>
        <div className="message__audio-info">
          <div className="message__audio-btn">
            <button onClick={togglePlay}>
              {isPlaying ? (
                <img src={pauseSvg} alt="" />
              ) : (
                <img src={playSvg} alt="" />
              )}
            </button>
          </div>
          <div className="message__audio-wave">
            <img src={waveSvg} alt="" />
          </div>
          <span className="message__audio-duration">
            {convertCurrentTime(currentTime)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={classNames("message", {
        "message--isMe": isMe,
        "message--isTyping": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--isAudio": audio,
      })}
    >
      <div className="message__content">
        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && (
                <p className="message__text">
                  {text}
                  <Emoji emoji=":santa::skin-tone-3:" size={16} />
                </p>
              )}
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>

              {audio && <AudioMessage audio={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, key) => (
                <div className="message__attachments-item" key={key}>
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
        </div>

        <IconReaded isMe={isMe} isReaded={isReaded} />
      </div>

      {date && (
        <div className="message__date">
          <span>
            <Time date={date} />
          </span>
        </div>
      )}
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  audio: PropTypes.string,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default Message;
