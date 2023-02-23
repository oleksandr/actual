import React from 'react';

function GraphBackground({ width, height, style }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1200 500"
      style={style}
      preserveAspectRatio="none"
    >
      <g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-2">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-2)">
            <path
              d="M0,429.54725850078586C0,429.54725850078586,53.333333333333336,367.317401257759,80,356.867128082319C106.66666666666666,346.41685490687905,133.33333333333334,360.6160160130778,160,366.84561944814607C186.66666666666666,373.07522288321434,213.33333333333334,393.0130573390628,240,394.24474869272854C266.6666666666667,395.47644004639426,293.3333333333333,368.3566192476968,320,374.2357675701403C346.6666666666667,380.1149158925838,373.3333333333333,438.0367375716288,400,429.5196386273896C426.6666666666667,421.0025396831504,453.3333333333333,341.05435108385024,480,323.13317390470513C506.6666666666667,305.21199672556,533.3333333333334,328.101211193513,560,321.992575552519C586.6666666666666,315.883939911525,613.3333333333334,288.0767856615046,640,286.48136005874113C666.6666666666666,284.8859344559777,693.3333333333334,312.00088161578503,720,312.4200219359383C746.6666666666666,312.8391622560915,773.3333333333334,298.9362477958778,800,288.99620197966044C826.6666666666666,279.05615616344306,853.3333333333333,245.09229653207183,879.9999999999999,252.77974703863387C906.6666666666665,260.4671975451959,933.3333333333333,339.11497630585393,960,335.12090501903265C986.6666666666667,331.12683373221137,1013.3333333333334,237.60731155316847,1040,228.81531931770616C1066.6666666666667,220.02332708224384,1093.3333333333333,276.512259705548,1120,282.36895160625875C1146.6666666666667,288.2256435069695,1200,263.95547072197064,1200,263.95547072197064L1200,500C1200,500,1146.6666666666667,500,1120,500C1093.3333333333333,500,1066.6666666666667,500,1040,500C1013.3333333333334,500,986.6666666666667,500,960,500C933.3333333333333,500,906.6666666666665,500,879.9999999999999,500C853.3333333333333,500,826.6666666666666,500,800,500C773.3333333333334,500,746.6666666666666,500,720,500C693.3333333333334,500,666.6666666666666,500,640,500C613.3333333333334,500,586.6666666666666,500,560,500C533.3333333333334,500,506.6666666666667,500,480,500C453.3333333333333,500,426.6666666666667,500,400,500C373.3333333333333,500,346.6666666666667,500,320,500C293.3333333333333,500,266.6666666666667,500,240,500C213.33333333333334,500,186.66666666666666,500,160,500C133.33333333333334,500,106.66666666666666,500,80,500C53.333333333333336,500,0,500,0,500Z"
              role="presentation"
              shapeRendering="auto"
              style={{ fill: '#102A43', stroke: 'none', width: 200 }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-3">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-3)">
            <path
              d="M0,428.21392516745254C0,428.21392516745254,53.333333333333336,365.9840679244257,80,355.5337947489857C106.66666666666666,345.08352157354574,133.33333333333334,359.2826826797444,160,365.5122861148127C186.66666666666666,371.74188954988097,213.33333333333334,394.75164713104436,240,392.9114153593952C266.6666666666667,391.0711835877461,293.3333333333333,355.60130024001677,320,354.47089548491795C346.6666666666667,353.3404907298191,373.3333333333333,395.60347375437004,400,386.12898682880234C426.6666666666667,376.65449990323464,453.3333333333333,310.20212396649924,480,297.62397393151156C506.6666666666667,285.04582389652387,533.3333333333334,312.7394111532267,560,310.66008661887605C586.6666666666666,308.5807620845254,613.3333333333334,285.0769263947863,640,285.1480267254078C666.6666666666666,285.2191270560293,693.3333333333334,310.66754828245183,720,311.086688602605C746.6666666666666,311.5058289227582,773.3333333333334,297.6029144625445,800,287.66286864632707C826.6666666666666,277.72282283010964,853.3333333333333,246.57723175857333,879.9999999999999,251.44641370530053C906.6666666666665,256.3155956520277,933.3333333333333,320.87203161351147,960,316.8779603266902C986.6666666666667,312.8838890398689,1013.3333333333334,233.7046048830538,1040,227.48198598437284C1066.6666666666667,221.25936708569188,1093.3333333333333,275.5505066701492,1120,279.54224693460435C1146.6666666666667,283.5339871990595,1200,251.4324275711035,1200,251.4324275711035L1200,263.95547072197064C1200,263.95547072197064,1146.6666666666667,288.2256435069695,1120,282.36895160625875C1093.3333333333333,276.512259705548,1066.6666666666667,220.02332708224384,1040,228.81531931770616C1013.3333333333334,237.60731155316847,986.6666666666667,331.12683373221137,960,335.12090501903265C933.3333333333333,339.11497630585393,906.6666666666665,260.4671975451959,879.9999999999999,252.77974703863387C853.3333333333333,245.09229653207183,826.6666666666666,279.05615616344306,800,288.99620197966044C773.3333333333334,298.9362477958778,746.6666666666666,312.8391622560915,720,312.4200219359383C693.3333333333334,312.00088161578503,666.6666666666666,284.8859344559777,640,286.48136005874113C613.3333333333334,288.0767856615046,586.6666666666666,315.883939911525,560,321.992575552519C533.3333333333334,328.101211193513,506.6666666666667,305.21199672556,480,323.13317390470513C453.3333333333333,341.05435108385024,426.6666666666667,421.0025396831504,400,429.5196386273896C373.3333333333333,438.0367375716288,346.6666666666667,380.1149158925838,320,374.2357675701403C293.3333333333333,368.3566192476968,266.6666666666667,395.47644004639426,240,394.24474869272854C213.33333333333334,393.0130573390628,186.66666666666666,373.07522288321434,160,366.84561944814607C133.33333333333334,360.6160160130778,106.66666666666666,346.41685490687905,80,356.867128082319C53.333333333333336,367.317401257759,0,429.54725850078586,0,429.54725850078586Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(255, 255, 214, 0.8)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-4">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-4)">
            <path
              d="M0,326.913683193805C0,326.913683193805,53.333333333333336,251.8784720399289,80,238.86712808231908C106.66666666666666,225.85578412470926,133.33333333333334,242.61601601307785,160,248.8456194481461C186.66666666666666,255.07522288321434,213.33333333333334,276.1953089468716,240,276.24474869272854C266.6666666666667,276.2941884385855,293.3333333333333,250.2726626783865,320,249.1422579232877C346.6666666666667,248.0118531681889,373.3333333333333,280.8264786052095,400,269.4623201621357C426.6666666666667,258.0981617190619,453.3333333333333,192.20011489449874,480,180.95730726484487C506.6666666666667,169.714499635191,533.3333333333334,204.0847989185632,560,202.00547438421256C586.6666666666666,199.92614984986193,613.3333333333334,169.7456021334535,640,168.48136005874113C666.6666666666666,167.21711798402876,693.3333333333334,189.60800731750365,720,194.42002193593834C746.6666666666666,199.23203655437302,773.3333333333334,197.01545648410047,800,197.35344776934926C826.6666666666666,197.69143905459805,853.3333333333333,190.81413197397893,879.9999999999999,196.44796964743108C906.6666666666665,202.08180732088323,933.3333333333333,242.24978197480323,960,231.1564738100621C986.6666666666667,220.06316564532096,1013.3333333333334,140.55158821301785,1040,129.8881206589843C1066.6666666666667,119.22465310495075,1093.3333333333333,159.3206878256241,1120,167.1756684858608C1146.6666666666667,175.0306491460975,1200,177.0180046204045,1200,177.0180046204045L1200,251.4324275711035C1200,251.4324275711035,1146.6666666666667,283.5339871990595,1120,279.54224693460435C1093.3333333333333,275.5505066701492,1066.6666666666667,221.25936708569188,1040,227.48198598437284C1013.3333333333334,233.7046048830538,986.6666666666667,312.8838890398689,960,316.8779603266902C933.3333333333333,320.87203161351147,906.6666666666665,256.3155956520277,879.9999999999999,251.44641370530053C853.3333333333333,246.57723175857333,826.6666666666666,277.72282283010964,800,287.66286864632707C773.3333333333334,297.6029144625445,746.6666666666666,311.5058289227582,720,311.086688602605C693.3333333333334,310.66754828245183,666.6666666666666,285.2191270560293,640,285.1480267254078C613.3333333333334,285.0769263947863,586.6666666666666,308.5807620845254,560,310.66008661887605C533.3333333333334,312.7394111532267,506.6666666666667,285.04582389652387,480,297.62397393151156C453.3333333333333,310.20212396649924,426.6666666666667,376.65449990323464,400,386.12898682880234C373.3333333333333,395.60347375437004,346.6666666666667,353.3404907298191,320,354.47089548491795C293.3333333333333,355.60130024001677,266.6666666666667,391.0711835877461,240,392.9114153593952C213.33333333333334,394.75164713104436,186.66666666666666,371.74188954988097,160,365.5122861148127C133.33333333333334,359.2826826797444,106.66666666666666,345.08352157354574,80,355.5337947489857C53.333333333333336,365.9840679244257,0,428.21392516745254,0,428.21392516745254Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(155, 102, 255, 0.9)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-5">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-5)">
            <path
              d="M0,323.7617133822031C0,323.7617133822031,53.333333333333336,250.2420326268841,80,237.5337947489857C106.66666666666666,224.82555687108731,133.33333333333334,241.2826826797445,160,247.51228611481275C186.66666666666666,253.741889549881,213.33333333333334,276.18021136420134,240,274.91141535939516C266.6666666666667,273.642619354589,293.3333333333333,245.81146256271987,320,239.89951008597575C346.6666666666667,233.98755760923163,373.3333333333333,252.54056939741236,400,239.4397004989304C426.6666666666667,226.33883160044843,453.3333333333333,169.98713929602033,480,161.29429669508391C506.6666666666667,152.6014540941475,533.3333333333334,186.30702322159118,560,187.28264489331184C586.6666666666666,188.2582665650325,613.3333333333334,169.40959097652882,640,167.14802672540782C666.6666666666666,164.88646247428682,693.3333333333334,171.7335644771297,720,173.71325938658578C746.6666666666666,175.69295429604185,773.3333333333334,176.38347358058428,800,179.0261961821442C826.6666666666666,181.6689187837041,853.3333333333333,183.38639235720484,879.9999999999999,189.56959499594524C906.6666666666665,195.75279763468563,933.3333333333333,231.6358229246838,960,216.12541201458652C986.6666666666667,200.61500110448924,1013.3333333333334,110.14832121491231,1040,96.50712953536157C1066.6666666666667,82.86593785581083,1093.3333333333333,123.58531841554144,1120,134.27826193728208C1146.6666666666667,144.9712054590227,1200,160.6647906658054,1200,160.6647906658054L1200,177.0180046204045C1200,177.0180046204045,1146.6666666666667,175.0306491460975,1120,167.1756684858608C1093.3333333333333,159.3206878256241,1066.6666666666667,119.22465310495075,1040,129.8881206589843C1013.3333333333334,140.55158821301785,986.6666666666667,220.06316564532096,960,231.1564738100621C933.3333333333333,242.24978197480323,906.6666666666665,202.08180732088323,879.9999999999999,196.44796964743108C853.3333333333333,190.81413197397893,826.6666666666666,197.69143905459805,800,197.35344776934926C773.3333333333334,197.01545648410047,746.6666666666666,199.23203655437302,720,194.42002193593834C693.3333333333334,189.60800731750365,666.6666666666666,167.21711798402876,640,168.48136005874113C613.3333333333334,169.7456021334535,586.6666666666666,199.92614984986193,560,202.00547438421256C533.3333333333334,204.0847989185632,506.6666666666667,169.714499635191,480,180.95730726484487C453.3333333333333,192.20011489449874,426.6666666666667,258.0981617190619,400,269.4623201621357C373.3333333333333,280.8264786052095,346.6666666666667,248.0118531681889,320,249.1422579232877C293.3333333333333,250.2726626783865,266.6666666666667,276.2941884385855,240,276.24474869272854C213.33333333333334,276.1953089468716,186.66666666666666,255.07522288321434,160,248.8456194481461C133.33333333333334,242.61601601307785,106.66666666666666,225.85578412470926,80,238.86712808231908C53.333333333333336,251.8784720399289,0,326.913683193805,0,326.913683193805Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(155, 102, 255, 0.6)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-6">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-6)">
            <path
              d="M0,321.73559221494247C0,321.73559221494247,53.333333333333336,244.3805304669803,80,230.71917787574432C106.66666666666666,217.05782528450834,133.33333333333334,234.5279614583823,160,239.76747666752652C186.66666666666666,245.00699187667075,213.33333333333334,262.37082291635664,240,262.15626913060976C266.6666666666667,261.94171534486287,293.3333333333333,243.2937262605948,320,238.48015395304532C346.6666666666667,233.66658164549582,373.3333333333333,247.58409527328038,400,233.27483528531275C426.6666666666667,218.9655752973451,453.3333333333333,161.94099647262323,480,152.62459402523945C506.6666666666667,143.30819157785567,533.3333333333334,176.2554516009075,560,177.37642060101C586.6666666666666,178.49738960111253,613.3333333333334,161.07334874140474,640,159.35040802585462C666.6666666666666,157.6274673103045,693.3333333333334,164.0025184171625,720,167.0387763077092C746.6666666666666,170.07503419825593,773.3333333333334,174.5455788996633,800,177.56795536913495C826.6666666666666,180.5903318386066,853.3333333333333,179.08795313192923,879.9999999999999,185.17303512453918C906.6666666666665,191.25811711714914,933.3333333333333,229.31105213897365,960,214.0784473247947C986.6666666666667,198.84584251061574,1013.3333333333334,107.54653437310476,1040,93.7774062394655C1066.6666666666667,80.00827810582625,1093.3333333333333,122.15495997123121,1120,131.46367852295913C1146.6666666666667,140.77239707468706,1200,149.62971754983306,1200,149.62971754983306L1200,160.6647906658054C1200,160.6647906658054,1146.6666666666667,144.9712054590227,1120,134.27826193728208C1093.3333333333333,123.58531841554144,1066.6666666666667,82.86593785581083,1040,96.50712953536157C1013.3333333333334,110.14832121491231,986.6666666666667,200.61500110448924,960,216.12541201458652C933.3333333333333,231.6358229246838,906.6666666666665,195.75279763468563,879.9999999999999,189.56959499594524C853.3333333333333,183.38639235720484,826.6666666666666,181.6689187837041,800,179.0261961821442C773.3333333333334,176.38347358058428,746.6666666666666,175.69295429604185,720,173.71325938658578C693.3333333333334,171.7335644771297,666.6666666666666,164.88646247428682,640,167.14802672540782C613.3333333333334,169.40959097652882,586.6666666666666,188.2582665650325,560,187.28264489331184C533.3333333333334,186.30702322159118,506.6666666666667,152.6014540941475,480,161.29429669508391C453.3333333333333,169.98713929602033,426.6666666666667,226.33883160044843,400,239.4397004989304C373.3333333333333,252.54056939741236,346.6666666666667,233.98755760923163,320,239.89951008597575C293.3333333333333,245.81146256271987,266.6666666666667,273.642619354589,240,274.91141535939516C213.33333333333334,276.18021136420134,186.66666666666666,253.741889549881,160,247.51228611481275C133.33333333333334,241.2826826797445,106.66666666666666,224.82555687108731,80,237.5337947489857C53.333333333333336,250.2420326268841,0,323.7617133822031,0,323.7617133822031Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(155, 102, 255, 0.3)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-7">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-7)">
            <path
              d="M0,316.2759280480915C0,316.2759280480915,53.333333333333336,239.311598447175,80,224.54362701107232C106.66666666666666,209.77565557496965,133.33333333333334,223.0443335606096,160,227.66809943147547C186.66666666666666,232.29186530234134,213.33333333333334,251.69797208550557,240,252.28622223626752C266.6666666666667,252.87447238702947,293.3333333333333,236.13853093018236,320,231.19760033604712C346.6666666666667,226.25666974191188,373.3333333333333,237.68908983853868,400,222.6406386714561C426.6666666666667,207.5921875043735,453.3333333333333,149.97150790181323,480,140.90689333355152C506.6666666666667,131.84227876528982,533.3333333333334,167.38181223479458,560,168.25295126188587C586.6666666666666,169.12409028897716,613.3333333333334,147.8189644408997,640,146.13372749609925C666.6666666666666,144.44849055129882,693.3333333333334,155.08692027541122,720,158.14152959308325C746.6666666666666,161.19613891075528,773.3333333333334,161.96439553415803,800,164.46138340213145C826.6666666666666,166.95837127010486,853.3333333333333,166.5150169426716,879.9999999999999,173.1234568009237C906.6666666666665,179.7318966591758,933.3333333333333,218.37402840184853,960,204.11202255164403C986.6666666666667,189.85001670143953,1013.3333333333334,101.19695114404071,1040,87.55142169969662C1066.6666666666667,73.90589225535253,1093.3333333333333,114.0260155995877,1120,122.23884588557951C1146.6666666666667,130.4516761715713,1200,136.82840341564747,1200,136.82840341564747L1200,149.62971754983306C1200,149.62971754983306,1146.6666666666667,140.77239707468706,1120,131.46367852295913C1093.3333333333333,122.15495997123121,1066.6666666666667,80.00827810582625,1040,93.7774062394655C1013.3333333333334,107.54653437310476,986.6666666666667,198.84584251061574,960,214.0784473247947C933.3333333333333,229.31105213897365,906.6666666666665,191.25811711714914,879.9999999999999,185.17303512453918C853.3333333333333,179.08795313192923,826.6666666666666,180.5903318386066,800,177.56795536913495C773.3333333333334,174.5455788996633,746.6666666666666,170.07503419825593,720,167.0387763077092C693.3333333333334,164.0025184171625,666.6666666666666,157.6274673103045,640,159.35040802585462C613.3333333333334,161.07334874140474,586.6666666666666,178.49738960111253,560,177.37642060101C533.3333333333334,176.2554516009075,506.6666666666667,143.30819157785567,480,152.62459402523945C453.3333333333333,161.94099647262323,426.6666666666667,218.9655752973451,400,233.27483528531275C373.3333333333333,247.58409527328038,346.6666666666667,233.66658164549582,320,238.48015395304532C293.3333333333333,243.2937262605948,266.6666666666667,261.94171534486287,240,262.15626913060976C213.33333333333334,262.37082291635664,186.66666666666666,245.00699187667075,160,239.76747666752652C133.33333333333334,234.5279614583823,106.66666666666666,217.05782528450834,80,230.71917787574432C53.333333333333336,244.3805304669803,0,321.73559221494247,0,321.73559221494247Z"
              role="presentation"
              shapeRendering="auto"
              style={{ fill: '#102A43', stroke: 'none', width: 200 }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-8">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-8)">
            <path
              d="M0,310.48582618192785C0,310.48582618192785,53.333333333333336,232.6799358470139,80,218.00989075688017C106.66666666666666,203.33984566674644,133.33333333333334,217.48299145720196,160,222.46555564112543C186.66666666666666,227.4481198250489,213.33333333333334,246.4675523459136,240,247.905275860421C266.6666666666667,249.3429993749284,293.3333333333333,235.88388026817583,320,231.0918967281699C346.6666666666667,226.29991318816397,373.3333333333333,234.93100208663674,400,219.15337462038542C426.6666666666667,203.3757471541341,453.3333333333333,145.0767397265584,480,136.42613193066205C506.6666666666667,127.7755241347657,533.3333333333334,165.7575415789051,560,167.24972784500733C586.6666666666666,168.74191411110957,613.3333333333334,147.99409896608898,640,145.37924952727542C666.6666666666666,142.76440008846185,693.3333333333334,148.64766838421332,720,151.56063121212594C746.6666666666666,154.47359404003856,773.3333333333334,159.91878838431128,800,162.8570264947511C826.6666666666666,165.7952646051909,853.3333333333333,163.10262112522082,879.9999999999999,169.19005987476487C906.6666666666665,175.27749862430892,933.3333333333333,213.82295464224046,960,199.38165899201545C986.6666666666667,184.94036334179043,1013.3333333333334,96.10135670147007,1040,82.54228597341472C1066.6666666666667,68.98321524535937,1093.3333333333333,109.85060275300549,1120,118.0272346236834C1146.6666666666667,126.2038664943613,1200,131.60207719748217,1200,131.60207719748217L1200,136.82840341564747C1200,136.82840341564747,1146.6666666666667,130.4516761715713,1120,122.23884588557951C1093.3333333333333,114.0260155995877,1066.6666666666667,73.90589225535253,1040,87.55142169969662C1013.3333333333334,101.19695114404071,986.6666666666667,189.85001670143953,960,204.11202255164403C933.3333333333333,218.37402840184853,906.6666666666665,179.7318966591758,879.9999999999999,173.1234568009237C853.3333333333333,166.5150169426716,826.6666666666666,166.95837127010486,800,164.46138340213145C773.3333333333334,161.96439553415803,746.6666666666666,161.19613891075528,720,158.14152959308325C693.3333333333334,155.08692027541122,666.6666666666666,144.44849055129882,640,146.13372749609925C613.3333333333334,147.8189644408997,586.6666666666666,169.12409028897716,560,168.25295126188587C533.3333333333334,167.38181223479458,506.6666666666667,131.84227876528982,480,140.90689333355152C453.3333333333333,149.97150790181323,426.6666666666667,207.5921875043735,400,222.6406386714561C373.3333333333333,237.68908983853868,346.6666666666667,226.25666974191188,320,231.19760033604712C293.3333333333333,236.13853093018236,266.6666666666667,252.87447238702947,240,252.28622223626752C213.33333333333334,251.69797208550557,186.66666666666666,232.29186530234134,160,227.66809943147547C133.33333333333334,223.0443335606096,106.66666666666666,209.77565557496965,80,224.54362701107232C53.333333333333336,239.311598447175,0,316.2759280480915,0,316.2759280480915Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(155, 102, 255, 0.18)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-9">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-9)">
            <path
              d="M0,305.11401932215836C0,305.11401932215836,53.333333333333336,229.57807419458555,80,214.77733050273815C106.66666666666666,199.97658681089075,133.33333333333334,211.37788364239594,160,216.3095571710739C186.66666666666666,221.24123069975184,213.33333333333334,242.95940068665465,240,244.36737167480575C266.6666666666667,245.77534266295686,293.3333333333333,229.44224769866796,320,224.75738309998047C346.6666666666667,220.072518501293,373.3333333333333,231.7302424711168,400,216.25818408268088C426.6666666666667,200.78612569424496,453.3333333333333,140.81121653732018,480,131.92503276936486C506.6666666666667,123.03884900140955,533.3333333333334,161.73762473129128,560,162.941081474949C586.6666666666666,164.1445382186067,613.3333333333334,141.73658593724412,640,139.14577323131118C666.6666666666666,136.55496052537825,693.3333333333334,144.367723825823,720,147.3962052393514C746.6666666666666,150.42468665287979,773.3333333333334,154.32561573412673,800,157.3166617124815C826.6666666666666,160.30770769083628,853.3333333333333,158.906762256721,879.9999999999999,165.3424811094801C906.6666666666665,171.7781999622392,933.3333333333333,210.73230738888958,960,195.93097482903613C986.6666666666667,181.12964226918268,1013.3333333333334,90.4707281605126,1040,76.53448575035941C1066.6666666666667,62.59824334020621,1093.3333333333333,104.05223120779034,1120,112.31352036811694C1146.6666666666667,120.57480952844354,1200,126.10222071231902,1200,126.10222071231902L1200,131.60207719748217C1200,131.60207719748217,1146.6666666666667,126.2038664943613,1120,118.0272346236834C1093.3333333333333,109.85060275300549,1066.6666666666667,68.98321524535937,1040,82.54228597341472C1013.3333333333334,96.10135670147007,986.6666666666667,184.94036334179043,960,199.38165899201545C933.3333333333333,213.82295464224046,906.6666666666665,175.27749862430892,879.9999999999999,169.19005987476487C853.3333333333333,163.10262112522082,826.6666666666666,165.7952646051909,800,162.8570264947511C773.3333333333334,159.91878838431128,746.6666666666666,154.47359404003856,720,151.56063121212594C693.3333333333334,148.64766838421332,666.6666666666666,142.76440008846185,640,145.37924952727542C613.3333333333334,147.99409896608898,586.6666666666666,168.74191411110957,560,167.24972784500733C533.3333333333334,165.7575415789051,506.6666666666667,127.7755241347657,480,136.42613193066205C453.3333333333333,145.0767397265584,426.6666666666667,203.3757471541341,400,219.15337462038542C373.3333333333333,234.93100208663674,346.6666666666667,226.29991318816397,320,231.0918967281699C293.3333333333333,235.88388026817583,266.6666666666667,249.3429993749284,240,247.905275860421C213.33333333333334,246.4675523459136,186.66666666666666,227.4481198250489,160,222.46555564112543C133.33333333333334,217.48299145720196,106.66666666666666,203.33984566674644,80,218.00989075688017C53.333333333333336,232.6799358470139,0,310.48582618192785,0,310.48582618192785Z"
              role="presentation"
              shapeRendering="auto"
              style={{ fill: '#102A43', stroke: 'none', width: 200 }}
            />
          </g>
        </g>
        <g style={{ height: '100%', width: '100%' }}>
          <defs>
            <clipPath id="victory-clip-10">
              <rect
                x={0}
                y={0}
                width={1200}
                height={500}
                role="presentation"
                shapeRendering="auto"
                vectorEffect="non-scaling-stroke"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#victory-clip-10)">
            <path
              d="M0,305.04780901069887C0,305.04780901069887,53.333333333333336,229.5009808669197,80,214.3133455911202C106.66666666666666,199.1257103153207,133.33333333333334,209.28631240350322,160,213.9219973559019C186.66666666666666,218.5576823083006,213.33333333333334,240.42060130481042,240,242.12745530551229C266.6666666666667,243.83430930621415,293.3333333333333,228.58505840040354,320,224.1631213601131C346.6666666666667,219.74118431982268,373.3333333333333,230.99746478621597,400,215.59583306376965C426.6666666666667,200.19420134132332,453.3333333333333,140.97086467214,480,131.7533310254351C506.6666666666667,122.53579737873021,533.3333333333334,159.2442673560655,560,160.29063118354026C586.6666666666666,161.336995011015,613.3333333333334,140.5609421757835,640,138.03151399028366C666.6666666666666,135.5020858047838,693.3333333333334,141.98829880135094,720,145.11406207054108C746.6666666666666,148.23982533973123,773.3333333333334,153.4909841504474,800,156.78609360542458C826.6666666666666,160.08120306040178,853.3333333333333,158.77636365522864,879.9999999999999,164.8847188004043C906.6666666666665,170.99307394557997,933.3333333333333,208.42699344365087,960,193.43622447647863C986.6666666666667,178.44545550930638,1013.3333333333334,88.83967435368103,1040,74.94010499737078C1066.6666666666667,61.04053564106053,1093.3333333333333,101.85439716008013,1120,110.03880833861712C1146.6666666666667,118.2232195171541,1200,124.0465720685927,1200,124.0465720685927L1200,126.10222071231902C1200,126.10222071231902,1146.6666666666667,120.57480952844354,1120,112.31352036811694C1093.3333333333333,104.05223120779034,1066.6666666666667,62.59824334020621,1040,76.53448575035941C1013.3333333333334,90.4707281605126,986.6666666666667,181.12964226918268,960,195.93097482903613C933.3333333333333,210.73230738888958,906.6666666666665,171.7781999622392,879.9999999999999,165.3424811094801C853.3333333333333,158.906762256721,826.6666666666666,160.30770769083628,800,157.3166617124815C773.3333333333334,154.32561573412673,746.6666666666666,150.42468665287979,720,147.3962052393514C693.3333333333334,144.367723825823,666.6666666666666,136.55496052537825,640,139.14577323131118C613.3333333333334,141.73658593724412,586.6666666666666,164.1445382186067,560,162.941081474949C533.3333333333334,161.73762473129128,506.6666666666667,123.03884900140955,480,131.92503276936486C453.3333333333333,140.81121653732018,426.6666666666667,200.78612569424496,400,216.25818408268088C373.3333333333333,231.7302424711168,346.6666666666667,220.072518501293,320,224.75738309998047C293.3333333333333,229.44224769866796,266.6666666666667,245.77534266295686,240,244.36737167480575C213.33333333333334,242.95940068665465,186.66666666666666,221.24123069975184,160,216.3095571710739C133.33333333333334,211.37788364239594,106.66666666666666,199.97658681089075,80,214.77733050273815C53.333333333333336,229.57807419458555,0,305.11401932215836,0,305.11401932215836Z"
              role="presentation"
              shapeRendering="auto"
              style={{
                fill: 'rgba(155, 102, 255, 0.06)',
                stroke: 'none',
                width: 200,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GraphBackground;