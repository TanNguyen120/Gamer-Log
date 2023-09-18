import { AiFillWindows, AiOutlineMacCommand } from 'react-icons/ai';
import { FaLinux, FaXbox } from 'react-icons/fa';
import { BsNintendoSwitch, BsApple, BsAndroid2 } from 'react-icons/bs';
import { TbBrandXbox } from 'react-icons/tb';
import { SiPlaystation3, SiPlaystation4, SiPlaystation5 } from 'react-icons/si';
export default function IconPlatform({
  platformName,
}: {
  platformName: string;
}) {
  const iconCss: string = 'hover:cursor-pointer';

  switch (platformName) {
    case 'PC':
      return <AiFillWindows title={platformName} className={iconCss} />;
    case 'macOS':
      return <AiOutlineMacCommand title={platformName} className={iconCss} />;
    case 'Linux':
      return <FaLinux title={platformName} className={iconCss} />;
    case 'Nintendo Switch':
      return <BsNintendoSwitch title={platformName} className={iconCss} />;
    case 'Xbox One':
      return <FaXbox title={platformName} className={iconCss} />;
    case 'Xbox 360':
      return <TbBrandXbox title={platformName} className={iconCss} />;
    case 'Xbox Series S/X':
      return <TbBrandXbox title={platformName} className={iconCss} />;
    case 'PlayStation 3':
      return (
        <SiPlaystation3
          title={platformName}
          className={iconCss + ' text-2xl'}
        />
      );
    case 'PlayStation 4':
      return (
        <SiPlaystation4
          title={platformName}
          className={iconCss + ' text-2xl'}
        />
      );
    case 'PlayStation 5':
      return (
        <SiPlaystation5
          title={platformName}
          className={iconCss + ' text-2xl'}
        />
      );
    case 'iOS':
      return <BsApple title={platformName} className={iconCss} />;
    case 'Android':
      return <BsAndroid2 title={platformName} className={iconCss} />;
    default:
      return <div>{platformName}</div>;
  }
}
