# Solidity Build Lab

## What will change
- Replace the current progress-only demo with a usable Solidity workspace.
- Generate a safe contract template from the visitor’s prompt and show editable Solidity source.
- Compile the source with a real Solidity compiler loaded only when needed.
- Deploy the compiled bytecode to an isolated in-browser EVM and run contract calls as tests.
- Show compiler diagnostics, ABI, bytecode status, deployment address, transaction gas, and pass/fail test logs.

## User flow
1. Enter an idea such as “Build a USDC payment application.”
2. Select **Generate code** to create Solidity source.
3. Review or edit the code.
4. Select **Compile** to validate the Solidity contract.
5. Select **Run tests** to deploy it inside a temporary local EVM and verify state-changing and read calls.

## Safety and scope
- No wallet connection, private key, real funds, or public blockchain transaction.
- Every test run is temporary and resets when the page reloads.
- Generated examples remain educational and require audit before real deployment.

## Technical details
- Keep the feature inside the existing React build section.
- Lazy-load browser-compatible Solidity and EVM packages to control initial page weight.
- Use deterministic templates for payment, token, vault, and generic prompts; no external AI service is required.
- Preserve keyboard access, mobile layout, reduced-motion behavior, and the existing ACA visual system.
- Validate compilation and a full generate → compile → deploy → test flow in the live preview.
