import { createHash } from "node:crypto";
import { gunzipSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";

const expectedSha256 = "569aaadc4b865e8bc74463ed879cbe60fa34f4a1628afd1b7b8e534c0d13688d";
const expectedSize = 74991;
const parts = ["part00", "part01", "part02", "part03", "part04"];

const encoded = parts
  .map((part) => readFileSync(new URL(`../.resume-fix/${part}`, import.meta.url), "utf8"))
  .join("");
const resume = gunzipSync(Buffer.from(encoded, "base64"));
const actualSha256 = createHash("sha256").update(resume).digest("hex");

if (resume.length !== expectedSize || actualSha256 !== expectedSha256) {
  throw new Error(`Resume integrity check failed: ${resume.length} bytes, sha256 ${actualSha256}`);
}

writeFileSync(new URL("../public/Muaz-Shafiq-Resume.pdf", import.meta.url), resume);
console.log(`Prepared exact resume: ${resume.length} bytes, sha256 ${actualSha256}`);
