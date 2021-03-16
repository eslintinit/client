export const Organisations = () => (
  <div
    className="rounded shadow-md max-w-6xl mx-auto flex justify-between bg-white py-4 sm:py-6 px-0 sm:px-4 bottom-0 absolute flex-col sm:flex-row -bottom-8 sm:-bottom-8"
    style={
      {
        // bottom: '-2rem',
      }
    }
  >
    <div className="flex items-center px-8 my-4 sm:my-0">
      <div className="w-12">
        <EuFlag />
      </div>
      <span className="ml-2 text-xs text-gray-500">
        Association of European
        <br />
        Migration Insitutions
      </span>
    </div>
    <div className="flex items-center px-8 my-4 sm:my-0">
      <div className="w-12">
        <MxFlag />
      </div>
      <span className="ml-2 text-xs text-gray-500">
        Mexican Migrant
        <br />
        Civil Society
      </span>
    </div>
    <div className="flex items-center px-8 my-4 sm:my-0">
      <div className="w-12">
        <SomeFlag />
      </div>
      <span className="ml-2 text-xs text-gray-500">
        American
        <br />
        Immigration Council
      </span>
    </div>
  </div>
)

const EuFlag = () => (
  <svg
    viewBox="0 0 36 24"
    focusable="false"
    className="chakra-icon css-qh1alm"
    data-qa="flag-bar-eu-flag"
  >
    <path d="m0 .0625h24v16h-24z" fill="#227fbb" />
    <g>
      <rect id="blue" width={36} height={24} fill="#0066CB" />
      <path
        id="Star 9"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9607 6.94808L17.9998 6.225L19.0389 6.94808L18.6723 5.73638L19.6811 4.97156L18.4154 4.94577L17.9998 3.75L17.5841 4.94577L16.3185 4.97156L17.3273 5.73638L16.9607 6.94808ZM19.6263 7.10518L20.8877 6.99853L21.4261 8.1443L21.7145 6.91164L22.9705 6.75369L21.8873 6.09851L22.1252 4.85512L21.1674 5.68286L20.0584 5.07236L20.5496 6.23911L19.6263 7.10518ZM23.0013 9.11275L21.8555 8.57438L23.0882 8.28601L23.2461 7.02995L23.9013 8.11317L25.1447 7.87525L24.3169 8.83309L24.9274 9.9421L23.7607 9.45087L22.8946 10.3742L23.0013 9.11275ZM23.0519 10.9607L23.775 11.9998L23.0519 13.0389L24.2636 12.6723L25.0284 13.6811L25.0542 12.4154L26.25 11.9998L25.0542 11.5841L25.0284 10.3185L24.2636 11.3273L23.0519 10.9607ZM23.0015 14.8877L22.8948 13.6263L23.7609 14.5496L24.9276 14.0584L24.3171 15.1674L25.1449 16.1252L23.9015 15.8873L23.2463 16.9705L23.0884 15.7145L21.8557 15.4261L23.0015 14.8877ZM21.4256 15.8555L20.8873 17.0013L19.6258 16.8946L20.5491 17.7607L20.0579 18.9274L21.1669 18.3169L22.1248 19.1447L21.8868 17.9013L22.97 17.2461L21.714 17.0882L21.4256 15.8555ZM18.0002 17.775L19.0393 17.0519L18.6727 18.2636L19.6815 19.0284L18.4159 19.0542L18.0002 20.25L17.5846 19.0542L16.3189 19.0284L17.3277 18.2636L16.9611 17.0519L18.0002 17.775ZM16.3737 16.8948L15.1123 17.0015L14.5739 15.8557L14.2855 17.0884L13.0295 17.2463L14.1127 17.9015L13.8748 19.1449L14.8326 18.3171L15.9416 18.9276L15.4504 17.7609L16.3737 16.8948ZM12.9987 14.8873L14.1445 15.4256L12.9118 15.714L12.7539 16.97L12.0987 15.8868L10.8553 16.1248L11.6831 15.1669L11.0726 14.0579L12.2393 14.5491L13.1054 13.6258L12.9987 14.8873ZM12.9481 13.0393L12.225 12.0002L12.9481 10.9611L11.7364 11.3277L10.9716 10.3189L10.9458 11.5846L9.75 12.0002L10.9458 12.4159L10.9716 13.6815L11.7364 12.6727L12.9481 13.0393ZM12.9985 9.11225L13.1052 10.3737L12.2391 9.45037L11.0724 9.94161L11.6829 8.8326L10.8551 7.87475L12.0985 8.11267L12.7537 7.02946L12.9116 8.28551L14.1443 8.57389L12.9985 9.11225ZM14.5744 8.14451L15.1127 6.99874L16.3742 7.10539L15.4509 6.23932L15.9421 5.07256L14.8331 5.68307L13.8752 4.85533L14.1132 6.09872L13.03 6.7539L14.286 6.91185L14.5744 8.14451Z"
        fill="#F2C500"
      />
    </g>
  </svg>
)

const MxFlag = () => (
  <img src="https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3421/18792/mexico-flag__84644.1575325491.jpg?c=2" />
)

const SomeFlag = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_the_USA.png" />
)
