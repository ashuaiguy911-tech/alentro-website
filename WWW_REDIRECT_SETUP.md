# WWW Redirect Configuration for alentroglobalservices.com

This guide shows how to configure www.alentroglobalservices.com → alentroglobalservices.com redirect through Vercel project settings.

## Background

The old domain `alentro-website.vercel.app` now redirects to `alentroglobalservices.com` via vercel.json (307 redirect). 

However, to handle **www.alentroglobalservices.com → alentroglobalservices.com**, the configuration must be on the **alentroglobalservices.com Vercel project itself** (not the old deployment).

## Option 1: Vercel Dashboard Configuration (Recommended)

### Step 1: Access Vercel Project Settings

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select the **alentroglobalservices.com** project
3. Click **Settings** (top navigation)
4. Click **Domains** (left sidebar)

### Step 2: Add Domain Redirect

1. In the **Domains** section, you should see:
   - Primary domain: `alentroglobalservices.com`
   - (Optionally) `www.alentroglobalservices.com` may already be listed

2. If **www.alentroglobalservices.com** is NOT listed:
   - Click **"Add Domain"**
   - Enter: `www.alentroglobalservices.com`
   - Click **"Add"**

3. For the www domain, Vercel will show redirect options:
   - Select **"Redirect to alentroglobalservices.com"**
   - Click **"Save"**

### Step 3: Verify DNS is Correct

For both domains to work:

**Non-www (primary):**
- CNAME: `alentro-website.vercel.app` (or your project deployment)
- Or use: `cname.vercel-dns.com` if using Vercel DNS

**WWW:**
- Should automatically redirect if configured in Vercel Domains
- Or CNAME: `cname.vercel-dns.com` (if using Vercel DNS)

---

## Option 2: vercel.json Configuration (Alternative)

If alentroglobalservices.com deployment uses the **same GitHub repo** as the old deployment, you can add a www redirect rule to vercel.json:

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "https://alentroglobalservices.com/$1",
      "permanent": true
    },
    {
      "source": "^(?:www\\.)?alentroglobalservices\\.com(.*)$",
      "destination": "https://alentroglobalservices.com$1",
      "permanent": true
    }
  ]
}
```

However, **Vercel Dashboard is cleaner** for this use case.

---

## Option 3: DNS-Level Redirect (Using Registrar)

If your domain registrar (e.g., GoDaddy, Namecheap, Route 53) supports URL redirects:

1. Log in to your registrar
2. Go to **DNS Settings** or **Domain Forwarding**
3. Set up a redirect:
   - **From:** `www.alentroglobalservices.com`
   - **To:** `https://alentroglobalservices.com`
   - **Type:** Permanent (301)

This is simpler if your registrar supports it.

---

## Testing the Redirect

After configuration, test with:

```bash
# Test www redirect
curl -s -o /dev/null -w "Status: %{http_code}\nRedirect: %{redirect_url}\n" \
  https://www.alentroglobalservices.com/

# Should output:
# Status: 301 (or 307/308)
# Redirect: https://alentroglobalservices.com/

# Test root domain still works
curl -s -o /dev/null -w "Status: %{http_code}\n" \
  https://alentroglobalservices.com/

# Should output:
# Status: 200
```

---

## Current Status

| Domain | Status | Action |
|--------|--------|--------|
| `alentro-website.vercel.app` | ✓ Redirects 307 | No action needed |
| `alentroglobalservices.com` | ✓ Works 200 | No action needed |
| `www.alentroglobalservices.com` | ⚠ SSL error | **Needs configuration** |

---

## Recommended Next Steps

1. **Use Vercel Dashboard** (Option 1) — simplest and most reliable
2. **Or use Registrar redirect** (Option 3) — if you prefer DNS-level handling
3. Test the www redirect once configured
4. Add www domain to Google Search Console and Bing Webmaster Tools

---

## FAQ

**Q: Why is www.alentroglobalservices.com showing SSL error?**
A: The SSL certificate for www.alentroglobalservices.com hasn't been provisioned yet. Once you configure it in Vercel Domains, Vercel will auto-provision the SSL certificate (takes ~5-10 minutes).

**Q: Should I use 301 or 307 redirects?**
A: For permanent redirects, 301 is semantically correct. Vercel's `permanent: true` flag typically results in 308 (permanent, POST-safe) or 307, which are functionally equivalent for search engines.

**Q: Will the www redirect hurt SEO?**
A: No. Permanent redirects (301/307/308) are SEO-safe. Search engines pass link equity through them.

**Q: Do I need to update Search Console?**
A: Yes. Add www.alentroglobalservices.com as a verified property in Google Search Console and set preferred domain to non-www version.
