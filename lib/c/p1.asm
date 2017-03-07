UNIX    equ 0                   ; calling convention: 0 for Windows, 1 for Unix

function_with_one_parameter macro
    if UNIX
    mov     r1,r7               ;; UNIX
    endif
    endm

function_with_two_parameters macro
    if UNIX
    mov     r1,r7               ;; UNIX
    mov     r2,r6               ;; UNIX
    endif
    endm

call_with_one_parameter macro function
    if UNIX
    mov     r7,r1               ;; UNIX
    endif
    call    function
    endm

call_with_two_parameters macro function
    if UNIX
    mov     r7,r1               ;; UNIX
    mov     r6,r2               ;; UNIX
    endif
    call    function
    endm

tail_with_one_parameter macro function
    if UNIX
    mov     r7,r1               ;; UNIX
    endif
    jmp     function
    endm

tail_with_two_parameters macro function
    if UNIX
    mov     r7,r1               ;; UNIX
    mov     r6,r2               ;; UNIX
    endif
    jmp     function
    endm

; There may be a performance benefit in padding programs so that most jump
; destinations are aligned on 16 byte boundaries.

pad macro
    align   16
    endm