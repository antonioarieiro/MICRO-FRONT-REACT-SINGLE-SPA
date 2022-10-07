import React from "react";
import KineContext from "../../../_context/KineContext";
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { Label, Modal, Checkbox } from "flowbite-react";
import './Login.scss';
export default function Login(props) {

  const { show, setShow } = props;
  const { user, setUser } = React.useContext(KineContext);
  const [account, setAccounts] = React.useState([]);
  const [error, setError] = React.useState('')
  React.useEffect(() => {
    extensionSetup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const onClose = () => {
    setShow(false);
  }

  const selectAccount = (arr) => {
    setUser(arr);
    setShow(false);
  }

  const extensionSetup = async () => {
    const extensions = await web3Enable('kinergy');
    if (extensions.length === 0) {
      setError(
        <a href='https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd'>
          'No polkadot Wallet extension installed! click to install'
        </a>
      );
      return;
    }
    const accounts = await web3Accounts();
    setAccounts(accounts);
  };
  return (
    <>
      <Modal
        show={show}
        size="2xl"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white font-bold">
              Sign in
            </h3>
            <div>
              {
                account.length > 0 &&
                account.map((value, index) => (
                  <div
                    className="border mt-2 p-4 cursor-pointer accounts"
                    key={index}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {value.meta.name}
                    </h5>
                    <p className="font-normal text-gray-700  truncate font-bold">
                      {value.address}
                    </p>
                    <button 
                    className="acc-btn font-bold"
                    onClick={() => {selectAccount(value)}}
                    >
                      Select
                    </button>
                  </div>
                ))
              }

              {
                !account &&
                { error }
              }

            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 font-bold">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                  Remember me
                </Label>
              </div>

            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 font-bold">
              Not registered?{' '}
              <span
                href="/modal"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Don't have a polkadot wallet?
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}