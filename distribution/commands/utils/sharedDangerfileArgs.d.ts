import program from "commander"
export interface SharedCLI extends program.CommanderStatic {
  /** Should we be posting as much info as possible? */
  verbose: boolean
  /** Output to STDOUT instead of leaving a comment */
  textOnly: boolean
  /** Use a custom file for the CI provider instead of a built-in one */
  externalCiProvider?: string
  /** Where is the file? can be local or remote GH url  */
  dangerfile?: string
  /** The Danger run ID, so you can have many runs */
  id?: string
  /** Run in a repl? */
  repl?: string
  /** Use a custom file for the CI provider instead of a built-in one */
  process?: string
}
declare const _default: (command: any) => any
export default _default
