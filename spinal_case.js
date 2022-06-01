function spinalCase(str) {
    let spinal = "";
    spinal = str.split(/(?=[A-Z])/).map(i => i.trim());
    spinal = spinal.join("-").toLowerCase().replace(/_/g, "").replace(/\s/g, "-");
    console.log(spinal);
    return spinal;
}

spinalCase('This Is Spinal Tap');