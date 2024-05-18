import { Icon } from "@iconify/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './PasswordOutput.css';

const PasswordOutput = ({ password, isCopied, setIsCopied }) => {
    return (
        <div className="password-output-container">
            <div className="input-button-container">
                <input
                    className="password-input"
                    disabled
                    value={password}
                    placeholder="khireddine tidjet"
                />
                <CopyToClipboard text={password} onCopy={() => setIsCopied(true)}>
                    <button
                        className="copy-button"
                        disabled={!password}
                    >
                        <Icon icon={isCopied ? "iconamoon:check-bold" : "bxs:copy"} />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default PasswordOutput;
