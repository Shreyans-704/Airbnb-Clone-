# AI Workflow Plan

## Agent / Skill Assignments

### Phase 0 — Reconnaissance
**Agent**: Lead Frontend Engineer (primary conversation)
- Analyze reference screenshots
- Inspect existing repository
- Propose architecture
- Produce implementation plan

### Phase 1 — Desktop Listing Page
**Agent**: Lead Frontend Engineer
**Skills needed**:
- Next.js / Vite scaffolding
- CSS architecture (vanilla CSS with custom properties)
- Component composition
- Static data modeling
- Image optimization

**Workflow**:
1. Scaffold project with Vite + React
2. Implement design tokens / global styles
3. Build components top-to-bottom
4. Wire up static data
5. Verify each section against screenshots

### Phase 2 — Photo Tour
**Agent**: Lead Frontend Engineer
**Skills needed**:
- Modal / overlay patterns
- CSS Grid gallery layout
- Scroll management
- Focus trapping

### Phase 3 — Lightbox
**Agent**: Lead Frontend Engineer
**Skills needed**:
- Keyboard event handling
- CSS transitions
- Image preloading
- Accessible dialog patterns

### Phase 4 — Visual QA
**Agent**: Visual QA Reviewer
**Skills needed**:
- Screenshot comparison
- Pixel-level analysis
- CSS refinement
- Cross-browser spot checks

**Workflow**:
1. Capture full-page screenshots of implementation
2. Compare section-by-section against reference screenshots
3. Log discrepancies with severity levels
4. Apply pixel refinements iteratively

### Phase 5 — Accessibility + Interaction QA
**Agent**: Accessibility Reviewer
**Skills needed**:
- ARIA patterns
- Keyboard navigation testing
- Screen reader semantics
- Focus management audit

### Phase 6 — Architecture Diagram + Submission
**Agent**: Lead Frontend Engineer
**Skills needed**:
- Mermaid diagram generation
- README documentation
- Build verification
- Deployment check
