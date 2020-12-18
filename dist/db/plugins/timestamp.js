"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (schema) {
    // Create a pre-save hook
    schema.pre("save", function (next) {
        var now = Date.now();
        this.updatedAt = now;
        // Set a value for createdAt only if it is null
        if (!this.createdAt) {
            this.createdAt = now;
        }
        // Call the next function in the pre-save chain
        next();
    });
});
//# sourceMappingURL=timestamp.js.map