import style from './ui.less';
import Other from '../another/someone/other.jsx';
import util from 'pool/util/image';
const UI = props => {
  const { list } = props;

  const [leftLink,setleftLink] = React.useState(list[0].linkUrl);
  const [leftUrl,setleftUrl] = React.useState(list[0].picUrl);
  const [rightLink,setrightLink] = React.useState(list[1].linkUrl);
  const [rightUrl,setrighUrl] = React.useState(list[1].picUrl);


  return (
    <div className="footer-setting">
      <Other text={util} />  
      {list.length && (
        <div className="footer-setting-wrap">
          {leftUrl && (
            <div className="footer-setting-left">
              <a href={leftLink} target="_blank;">
                <img src={leftUrl} alt="广告位" />
              </a>
            </div>
          )}
          {rightUrl && (
            <div className="footer-setting-right">
              <a href={rightLink} target="_blank;">
                <img src={rightUrl} alt="广告位" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UI;
